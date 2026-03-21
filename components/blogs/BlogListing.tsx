type BlogListingProps = {
  title?: string;
  description?: string;
};

export default function BlogListing({ title = "Blogs", description = "This legacy route is retained for compatibility and currently not indexed." }: BlogListingProps) {
  return (
    <div className="nx-container py-20">
      <h1 className="nx-section-title">{title}</h1>
      <p className="mt-4 text-brand-muted">{description}</p>
    </div>
  );
}
