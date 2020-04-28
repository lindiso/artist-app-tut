/**
 * Configure default options for API Headers
 * @param {*} head Headers object additions/overrides
 * @param {string} [method=GET] HTTP method, default === GET
 * @param {*} body Body object
 */
// token = null,
export default (head = {}, method = 'GET', body = {}) => {
  const doNotAllowBody = ['GET'];
  const methodCheck: boolean = method && doNotAllowBody.some(forbiddenMethod => method !== forbiddenMethod);
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
    ...head,
  };
  const opt = { headers, method };
  if (methodCheck) return { ...opt, body: JSON.stringify(body) };
  return opt;
};
