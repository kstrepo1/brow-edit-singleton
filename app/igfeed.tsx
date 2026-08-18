// components/InstagramFeed.tsx
type InstagramFeedProps = {
  widgetId?: string;
};

export default function InstagramFeed({
  widgetId = "25706363",
}: InstagramFeedProps) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <iframe
        src={`https://widgets.sociablekit.com/instagram-feed/iframe/${widgetId}`}
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ border: "none", display: "block" }}
        title="Instagram Feed"
        loading="lazy"
      />
    </div>
  );
}