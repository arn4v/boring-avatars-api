import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Avatar, { AvatarProps } from "boring-avatars";
import * as yup from "yup";

const querySchema = yup.object().shape({
  variant: yup
    .string()
    .oneOf(["marble", "beam", "pixel", "sunset", "ring", "bauhaus"])
    .optional(),
  name: yup.string().optional(),
  size: yup.number().integer(),
});

type GetRequest = NextApiRequest & {
  query: {
    variant?: AvatarProps["variant"];
    size?: number;
    name?: string;
  };
};

export default nextConnect<NextApiRequest, NextApiResponse>().get(
  async (req: GetRequest, res) => {
    try {
      await querySchema.validate(req.query);
      const el = createElement(Avatar, {
        ...req.query,
      });
      const html = renderToStaticMarkup(el);
      res.setHeader(
        "Cache-Control",
        "s-maxage=31536000, stale-while-revalidate"
      );
      res.setHeader("Content-Type", "image/svg+xml");
      res.end(html);
    } catch (err) {
      res.status(400).send({ error: err.toString() });
    }
    return;
  }
);
