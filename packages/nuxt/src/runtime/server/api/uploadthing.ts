import { uploadRouter } from "#uploadthing-router";
import { defineEventHandler } from "h3";

import { createH3EventHandler } from "uploadthing/h3";

export default defineEventHandler((event) => {
  const runtime = useRuntimeConfig();

  return createH3EventHandler({
    router: uploadRouter,
    config: {
      uploadthingSecret: runtime.uploadthingSecret,
      uploadthingId: runtime.uploadthingAppId,
    },
  })(event);
});