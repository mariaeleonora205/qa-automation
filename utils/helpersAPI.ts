import { APIRequestContext } from '@playwright/test';

export async function getToken(request: APIRequestContext) {
  const res = await request.post('/auth', {
    data: {
      username: 'admin',
      password: 'password123'
    }
  });

  const body = await res.json();
  return body.token;
}

export async function createBooking(request: APIRequestContext) {
  const payload = {
    firstname: 'Maria',
    lastname: 'Test',
    totalprice: 100,
    depositpaid: true,
    bookingdates: {
      checkin: '2024-01-01',
      checkout: '2024-01-10'
    },
    additionalneeds: 'Breakfast'
  };

  const response = await request.post('/booking', { data: payload });
  const body = await response.json();

  return {
    response,
    id: body.bookingid,
    payload
  };
}