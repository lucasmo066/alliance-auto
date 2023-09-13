import { defineArrayMember, defineField, defineType } from 'sanity'


export default defineType({
    type: 'document',
    name: 'car',
    title: 'Cars',
    fields: [
        defineField({
            type: 'string',
            name: 'name',
            title: 'Name',
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: 'slug',
            name: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: 'make',
            name: 'make',
            title: 'Make',
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: 'string',
            name: 'model',
            title: 'Model',
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: 'string',
            name: 'year',
            title: 'Year',
            validation: (rule) => rule.required(),
        }),
        defineField({
            type: 'string',
            name: 'vin',
            title: 'VIN',
            // max length of 17
            validation: (rule) => rule.required().max(17),
        }),
        defineField({
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [
                defineArrayMember({
                    type: 'image',
                    name: 'image',
                    title: 'Image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        defineField({
                            type: 'string',
                            name: 'alt',
                            title: 'Alt',
                            validation: (rule) => rule.required(),
                        }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'images.0',
        },
        prepare({ title, media }) {
            return {
                title,
                media,
            }
        }
    },
})