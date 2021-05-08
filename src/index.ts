const VALID_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const isValidSlug = (input?: string): boolean =>
  input != null && VALID_SLUG_PATTERN.test(input);
