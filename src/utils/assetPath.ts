/**
 * Generates the correct asset path by prepending the base URL
 * This ensures assets work correctly in both development and production
 */
export function getAssetPath(path: string): string {
  const baseUrl = import.meta.env.BASE_URL;
  return `${baseUrl}${path.startsWith("/") ? path.slice(1) : path}`;
}
