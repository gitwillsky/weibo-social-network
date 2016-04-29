export const SELECT_CONTENT = "SELECT_CONTENT";
export function selectContent(contentId) {
  return {
    type: SELECT_CONTENT,
    id:contentId
  }
}
