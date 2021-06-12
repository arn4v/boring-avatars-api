# Boring Avatars API

REST API that generates SVG avatars using the [boring-avatars](https://github.com/boringdesigners/boring-avatars) library.

## Query Param Types

```typescript
type Query = {
  size?: int;
  variant?: "marble" | "beam" | "pixel" | "sunset" | "ring" | "bauhaus";
};
```

## Usage/Examples

```bash
curl https://boring-avatars-api.vercel.app/api/avatar?size=40&variant=marble
```
