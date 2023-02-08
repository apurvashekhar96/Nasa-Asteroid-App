import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://api.nasa.gov/neo/rest/v1/neo/12345?api_key=6bVQ55OWVc5hz1j32JZozPYxcJI9vmkVOP2Gr5Mb",
    (req, res, ctx) => {
      return res(
        ctx.json({
          name: "(2010 PK9)",
          nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3542519",
          is_potentially_hazardous_asteroid: true,
        })
      );
    }
  ),

  rest.get(
    "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=6bVQ55OWVc5hz1j32JZozPYxcJI9vmkVOP2Gr5Mb",
    (req, res, ctx) => {
      return res(
        ctx.json({
          near_earth_objects: [
            {
              name: "(2010 PK9)",
              nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3542519",
              is_potentially_hazardous_asteroid: true,
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
          ],
        })
      );
    }
  ),
];
