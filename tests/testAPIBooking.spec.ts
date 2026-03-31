import { test, expect } from '@playwright/test';
import { createBooking, getToken } from '../utils/helpersAPI';

test.describe('Booking API', () => {

  test('POST - Auth and Token', async ({ request }) => {
    const token = await getToken(request);
    expect(token).toBeTruthy();
  });


  test('POST - Validate create booking', async ({ request }) => {
    const booking = await createBooking(request);

    expect(booking.response.status()).toBe(200);
    expect(booking.id).toBeTruthy();
    expect(booking.payload.firstname).toBe('Maria');
  });


  test('GET - Validate read booking', async ({ request }) => {
    const booking = await createBooking(request);

    const res = await request.get(`/booking/${booking.id}`);
    expect(res.status()).toBe(200);

    const body = await res.json();
    expect(body).toMatchObject(booking.payload);
  });


  test('PUT - Validate update booking', async ({ request }) => {
    const booking = await createBooking(request);
    const token = await getToken(request);

    const updatedPayload = {
      ...booking.payload,
      bookingdates: {
        ...booking.payload.bookingdates,
        checkout: '2026-03-30'
      }
    };

    const response = await request.put(`/booking/${booking.id}`, {
      headers: {
        Cookie: `token=${token}`
      },
      data: updatedPayload
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.bookingdates.checkout).toBe('2026-03-30');
  });

  
  test('DELETE - Validate delete booking', async ({ request }) => {
    const booking = await createBooking(request);
    const token = await getToken(request);

    const del = await request.delete(`/booking/${booking.id}`, {
      headers: {
        Cookie: `token=${token}`
      }
    });

    expect(del.status()).toBe(201);

    const getDeleted = await request.get(`/booking/${booking.id}`);
    expect(getDeleted.status()).toBe(404);
  });

});