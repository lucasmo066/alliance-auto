import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'make',
    title: 'Make',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
    ],
});