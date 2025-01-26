export const formatImagePath = (fullPath: string) => {
    const parts = fullPath.split('/');
    return `${parts[parts.length - 2]}`;
   };