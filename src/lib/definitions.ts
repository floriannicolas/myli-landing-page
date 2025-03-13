export type ActionState = {
  status: 'success' | 'error';
  message?: string;
  response?: unknown;
};
