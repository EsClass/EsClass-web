import { ImageResponse } from "next/og";
// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Donations";
export const size = {
  width: 1200,
  height: 800,
};

// Image generation
export default async function OgImage() {
  // const fontData = fetch(
  //   new URL("../../public/Roboto.ttf", import.meta.url)
  // ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "#fff",
          width: "100%",
          fontSize: 90,
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          padding: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ margin: 0, padding: 0 }}>Final Year</p>
          <p style={{ margin: 0, padding: 0 }}>Project Software</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              margin: 0,
              marginBottom: 20,
              color: "#012970",
              fontSize: 48,
              padding: 0,
            }}
          >
            By Emmanuella Adedji (190221002)
          </p>
          <img
            height={250}
            width={250}
            style={{
              display: "flex",
              objectFit: "contain",
              marginLeft: "auto",
            }}
            alt=""
            src={
              "https://fysps.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9c5ff845.png&w=256&q=75"
            }
          />
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      // fonts: [
      //   {
      //     name: "Roboto",
      //     // data: await fontData,
      //     style: "normal",
      //     weight: 400,
      //   },
      // ],
    }
  );
}
