type Member = {
  name: string;
  role: string;
  photo: { src: string; alt: string };
};

export default function FounderCard({ member, captionCenter }: { member: Member; captionCenter?: boolean }) {
  return (
    <figure className="group">
      <div className="relative aspect-[5/4] rounded-card-lg bg-white p-2 shadow-card transition-[transform,box-shadow] duration-slow ease-in-out sm:group-hover:shadow-card-hover sm:group-hover:-translate-y-1 sm:group-hover:scale-[1.02]">
        <div className="relative w-full h-full rounded-card overflow-hidden bg-n-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={member.photo.src}
            alt={member.photo.alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-slow sm:group-hover:scale-[1.03]"
          />
        </div>
      </div>
      <figcaption className={`mt-4 ${captionCenter ? 'text-center' : ''}`}>
        <div className="text-display-xs font-display text-navy">{member.name}</div>
        <div className="text-label font-body uppercase tracking-label text-orange-text mt-1">{member.role}</div>
      </figcaption>
    </figure>
  );
}
