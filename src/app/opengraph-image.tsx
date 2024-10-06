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
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          height={250}
          width={500}
          style={{
            display: "flex",
            objectFit: "contain",
            marginBottom: 40,
          }}
          alt=""
          src={"https://esclass.vercel.app/images/logo.png"}
        />
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
