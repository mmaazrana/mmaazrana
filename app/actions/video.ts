'use server';

import { list } from '@vercel/blob';

export async function getVideoUrl(fileName: string) {
  const { blobs } = await list({
    prefix: fileName,
  });
  const {url} = blobs[0]
  return url;
} 