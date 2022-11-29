import { createAsyncThunk } from '@reduxjs/toolkit';
import load from './api';

const FETCH_GREETINGS = 'hello-react-rails/greetings/FETCH_GREETINGS';
export const FETCH_GREETINGS_FULFILLED = 'hello-react-rails/greetings/FETCH_GREETINGS/fulfilled';

export const fetchGreetings = createAsyncThunk(FETCH_GREETINGS, async () => load());
