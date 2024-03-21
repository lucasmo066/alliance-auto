import { groq } from "next-sanity";

export const getAllCars = groq`
    *[_type == "car" && defined(slug.current)] | order(name asc) {
        _id,
        name,
        date,
        "slug": slug.current,
        make,
        model,
        year,
        mileage,
        cost,
        transmission,
        "mainImage": images[0],
        sold,
        warranty,
    }
`;

export const carsBySlugQuery = groq`
  *[_type == "car" && slug.current == $slug][0] {
    _id,
    name,
    date,
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
    warranty,
    "slug": slug.current,
  }
`;

export const carPaths = groq`
  *[_type == "car" && slug.current != null].slug.current
`;
