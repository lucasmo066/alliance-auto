import "~/styles/globals.css";
import Navbar from "~/components/Navbar/Navbar";
import { PreviewBanner } from "~/components/preview/PreviewBanner";
import PreviewProvider from "~/components/preview/PreviewProvider";
import { readToken } from "~/lib/sanity.api";
import { draftMode } from "next/headers";

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined;

  const layout = (
    <div className={`relative flex flex-col overflow-x-hidden `}>
      {preview && <PreviewBanner />}
      <Navbar />
      <div className={`flex-grow`}>{children}</div>
    </div>
  );

  if (preview) {
    return <PreviewProvider token={preview.token}>{layout}</PreviewProvider>;
  }

  return layout;
}
