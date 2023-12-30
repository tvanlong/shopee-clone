import { describe, expect, it } from 'vitest'
import {
  clearLS,
  getAccessTokenFromLS,
  getProfileFromLS,
  getRefreshTokenFromLS,
  setAccessTokenToLS,
  setProfileToLS,
  setRefreshTokenToLS
} from '../auth'

// Localstorage
const refresh_token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvMzAxMkBnbWFpbC5jb20iLCJpZCI6IjY1OTAyYTIzYjExNDAwODkzZGY3MWZhZSIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjMtMTItMzBUMTQ6MzM6MDcuMjk5WiIsImlhdCI6MTcwMzk0Njc4NywiZXhwIjoxNzAzOTUwMzg3fQ.2ytsHK-31n-eUOHahM7PuObNIgvay1D-jeTR4T59wK8`
const access_token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTAyYTIzYjExNDAwODkzZGY3MWZhZSIsImVtYWlsIjoiaGVsbG8zMDEyQGdtYWlsLmNvbSIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjMtMTItMzBUMTQ6MzM6NDguODM3WiIsImlhdCI6MTcwMzk0NjgyOCwiZXhwIjoxNzAzOTQ2ODM4fQ.lkMm0_rpNJMZXiqzrOTwz_Ef5a69QZcrylB-_CA5Kfo`
const profile =
  '{"_id":"65902a23b11400893df71fae","roles":["User"],"email":"hello3012@gmail.com","createdAt":"2023-12-30T14:33:07.257Z","updatedAt":"2023-12-30T14:33:43.023Z","address":"Việt Nam","date_of_birth":"1989-12-31T17:00:00.000Z","name":"áo thun","phone":"0123456789","avatar":"61ce71e4-b15c-4d0c-89c4-b115bf33fbdf.jpg"}'

// Lưu vào localstorage
describe('setAccessTokenToLS', () => {
  it('access_token được set vào localstorage', () => {
    setAccessTokenToLS(access_token)
    expect(localStorage.getItem('access_token')).toBe(access_token)
  })
})

describe('setRefreshTokenToLS', () => {
  it('refresh_token được set vào localstorage', () => {
    setRefreshTokenToLS(refresh_token)
    expect(localStorage.getItem('refresh_token')).toEqual(refresh_token)
  })
})

describe('setProfileToLS', () => {
  it('profile được set vào localstorage', () => {
    setProfileToLS(JSON.parse(profile))
    expect(localStorage.getItem('profile')).toEqual(profile)
  })
})

// Lấy từ localstorage
describe('getAccessTokenFromLS', () => {
  it('access_token đã được lấy từ localstorage', () => {
    setAccessTokenToLS(access_token)
    expect(localStorage.getItem('access_token')).toBe(access_token)
  })
})

describe('getRefreshTokenFromLS', () => {
  it('refresh_token đã được lấy từ localstorage', () => {
    setRefreshTokenToLS(refresh_token)
    expect(localStorage.getItem('refresh_token')).toBe(refresh_token)
  })
})

describe('getProfileFromLS', () => {
  it('profile đã được lấy từ localstorage', () => {
    setProfileToLS(JSON.parse(profile))
    expect(localStorage.getItem('profile')).toBe(profile)
  })
})

// Xóa localstorage
describe('clearLS', () => {
  it('Đã xóa localstorage', () => {
    clearLS()
    expect(getAccessTokenFromLS()).toBe('')
    expect(getRefreshTokenFromLS()).toBe('')
    expect(getProfileFromLS()).toBe(null)
  })
})
