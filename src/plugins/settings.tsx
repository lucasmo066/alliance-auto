/**
 * This plugin contains all the logic for setting up the singletons
 */

import { apiVersion, previewSecretId } from "~/lib/sanity.api";
import { type DocumentDefinition } from "sanity";
import { type StructureResolver } from "sanity/desk";
import { PREVIEWABLE_DOCUMENT_TYPES } from "../../sanity.config";
import { PreviewPane } from "./previewPane/PreviewPane";

// we need to make all the singletons previewable and remove new document creation

export const singletonPlugin = (types: string[]) => {
  return {
    name: "singletonPlugin",
    document: {
      // Hide 'Singletons (such as Home)' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === "global") {
          return prev.filter(
            (templateItem) => !types.includes(templateItem.templateId),
          );
        }

        return prev;
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (prev, { schemaType }) => {
        if (types.includes(schemaType)) {
          return prev.filter(({ action }) => action !== "duplicate");
        }

        return prev;
      },
    },
  };
};

export const pageStructure = (
  typeDefArray: DocumentDefinition[],
): StructureResolver => {
  return (S) => {
    // Goes through all of the singletons that were provided and translates them into something the
    // Desktool can understand
    const singletonItems = typeDefArray.map((typeDef) => {
      return S.listItem()
        .title(typeDef.title!)
        .icon(typeDef.icon)
        .child(
          S.editor()
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(typeDef.name)
            .views([
              // @todo: consider DRYing with `plugins/previewPane/index.tsx`
              // Default form view
              S.view.form(),
              // Preview
              ...(PREVIEWABLE_DOCUMENT_TYPES.includes(typeDef.name)
                ? [
                    S.view
                      .component((props) => (
                        <PreviewPane
                          previewSecretId={previewSecretId}
                          apiVersion={apiVersion}
                          {...props}
                        />
                      ))
                      .title("Preview"),
                  ]
                : []),
            ]),
        );
    });

    // store post, location, member, service, insurance, and tier in the same list
    const dynamicDocuments = ["car", "testimonial"];

    const dynamic = S.documentTypeListItems().filter((listItem) =>
      dynamicDocuments.includes(listItem.getId() as string),
    );

    return S.list()
      .title("All")
      .items([
        S.listItem()
          .title("Manage Content")
          .child(
            S.list().title("Mange Content").items(dynamic).showIcons(true),
          ),
      ] as any);
  };
};
