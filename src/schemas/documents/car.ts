import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "car",
  title: "Cars",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "date",
      name: "date",
      title: "Date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      type: "make",
      name: "make",
      title: "Make",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "model",
      title: "Model",
    }),
    defineField({
      type: "string",
      name: "year",
      title: "Year",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "vin",
      title: "VIN",
      // must be length of 17
      validation: (rule) => rule.required().length(17),
    }),
    defineField({
      type: "number",
      name: "mileage",
      title: "Mileage",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "transmission",
      title: "Transmission",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "object",
      name: "cost",
      title: "Cost",
      fields: [
        defineField({
          type: "number",
          name: "price",
          title: "Price",
          validation: (rule) => rule.required(),
        }),
        defineField({
          type: "number",
          name: "kbbHigh",
          title: "What is the KBB High Price?",
        }),
      ],
    }),
    defineField({
      type: "object",
      name: "warranty",
      title: "Warranty Information",
      fields: [
        defineField({
          type: "string",
          name: "standard",
          title: "Standard Warranty",
          description: "Standard warranty included with the car.",
          options: {
            list: ["30 days or 300 miles"],
          },
          validation: (rule) => rule.required(),
        }),
        defineField({
          type: "object",
          name: "motor",
          title: "Motor Warranty",
          fields: [
            defineField({
              type: "number",
              name: "price",
              title: "Price",
              description: "Price for the motor warranty (if purchased).",
            }),
          ],
        }),
        defineField({
          type: "object",
          name: "transmission",
          title: "Transmission Warranty",
          fields: [
            defineField({
              type: "number",
              name: "price",
              title: "Price",
              description:
                "Price for the transmission warranty (if purchased).",
            }),
          ],
        }),
      ],
    }),

    defineField({
      type: "boolean",
      name: "sold",
      title: "Sold",
      description: "Check this box if the car has been sold",
    }),
    defineField({
      type: "number",
      name: "doors",
      title: "Amount of Doors",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "number",
      name: "previousOwners",
      title: "Number of Previous Owners",
    }),
    defineField({
      type: "boolean",
      name: "emissionStatus",
      title: "Emission Status",
    }),
    defineField({
      type: "object",
      name: "interiorDetails",
      title: "Interior Details",
      fields: [
        defineField({
          type: "string",
          name: "interiorColor",
          title: "Interior Color",
        }),
        defineField({
          type: "boolean",
          name: "sunroof",
          title: "Sunroof",
        }),
        defineField({
          type: "string",
          name: "seatingCapacity",
          title: "Seating Capacity",
        }),
      ],
    }),
    defineField({
      type: "object",
      name: "exteriorDetails",
      title: "Exterior Details",
      fields: [
        defineField({
          type: "string",
          name: "condition",
          title: "Condition",
        }),
        defineField({
          type: "string",
          name: "paintColor",
          title: "Paint Color",
        }),
        defineField({
          type: "string",
          name: "tireCondition",
          title: "Tire Condition",
        }),
      ],
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [
        defineArrayMember({
          type: "image",
          name: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              type: "string",
              name: "alt",
              title: "Alt",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "images.0",
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
});
