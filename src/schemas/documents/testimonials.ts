import { defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          name: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              type: "string",
              name: "alt",
              title: "Alt",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "message",
      title: "Message",
      type: "text",
    },
  ],
});
