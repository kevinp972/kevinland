declare module '*.png' {
  const content: import('next/image').StaticImageData;
  export default content;
}

declare module '*.PNG' {
  const content: import('next/image').StaticImageData;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: import('next/image').StaticImageData;
  export default content;
}

declare module '*.JPG' {
  const content: import('next/image').StaticImageData;
  export default content;
}

declare module '*.jpeg' {
  const content: import('next/image').StaticImageData;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
} 