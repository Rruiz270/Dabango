import { NextRequest, NextResponse } from 'next/server'
import { stripe, formatAmountForStripe } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const { items, userId, addressId } = await request.json()

    if (!items || items.length === 0) {
      return NextResponse.json(
        { message: 'No items provided' },
        { status: 400 }
      )
    }

    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'brl',
        product_data: {
          name: item.name,
          metadata: {
            variantId: item.variantId,
            size: item.size,
            color: item.color,
          }
        },
        unit_amount: formatAmountForStripe(item.price),
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'boleto'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_API_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/cart`,
      metadata: {
        userId,
        addressId,
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: formatAmountForStripe(15),
              currency: 'brl',
            },
            display_name: 'Envio Padrão',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 10,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: formatAmountForStripe(30),
              currency: 'brl',
            },
            display_name: 'Envio Expresso',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 3,
              },
            },
          },
        },
      ],
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    console.error('Checkout session error:', error)
    return NextResponse.json(
      { message: error.message || 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}