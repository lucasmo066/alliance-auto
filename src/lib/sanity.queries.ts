import { groq } from "next-sanity";

export const getAllCars = groq`
    *[_type == "car" && defined(slug.current)] | order(name asc) {
        _id,
        name,
        make,
        model,
        year,
        mileage,
        transmission,
        cost,
        sold,
        "mainImage": images[0],
        "slug": slug.current,
    }
`;

export const carsBySlugQuery = groq`
  *[_type == "car" && slug.current == $slug][0] {
    _id,
    name,
    make,
    model,
    year,
    vin,
    mileage,
    transmission,
    cost,
    emissionStatus,
    sold,
    doors,
    previousOwners,
    interiorDetails,
    exteriorDetails,
    images,
    "slug": slug.current,
  }
`;

export const carPaths = groq`
  *[_type == "car" && slug.current != null].slug.current
`;
