import { LazyImage } from "./LazyImage";
import { Reveal } from "./Reveal";

const faculties = [
  {
    name: "Faculty of Engineering & Applied Sciences",
    short: "Engineering",
    dean: "Prof. Amara Okonkwo",
    departments: ["Computer Science", "Electrical", "Mechanical", "Aerospace", "Civil", "Materials"],
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=70",
    color: "from-cyan to-lavender",
    students: "8,420",
  },
  {
    name: "Faculty of Arts, Media & Design",
    short: "Arts & Design",
    dean: "Prof. Liu Wen",
    departments: ["Visual Arts", "Film", "Music", "Industrial Design", "Fashion", "Theatre"],
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=900&q=70",
    color: "from-magenta to-coral",
    students: "5,210",
  },
  {
    name: "Faculty of Business & Economics",
    short: "Business",
    dean: "Prof. Daniel Reyes",
    departments: ["Finance", "Marketing", "Strategy", "Entrepreneurship", "Economics", "Analytics"],
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=70",
    color: "from-sunshine to-coral",
    students: "6,780",
  },
  {
    name: "Faculty of Natural & Physical Sciences",
    short: "Sciences",
    dean: "Prof. Kavya Iyer",
    departments: ["Physics", "Chemistry", "Biology", "Mathematics", "Astronomy", "Earth Sciences"],
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900&q=70",
    color: "from-lime to-cyan",
    students: "7,140",
  },
  {
    name: "Faculty of Medicine & Health Sciences",
    short: "Medicine",
    dean: "Prof. Hana Bergström",
    departments: ["Medicine", "Nursing", "Pharmacy", "Public Health", "Dentistry", "Neuroscience"],
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=70",
    color: "from-coral to-magenta",
    students: "4,960",
  },
  {
    name: "Faculty of Humanities & Social Sciences",
    short: "Humanities",
    dean: "Prof. Mateo Álvarez",
    departments: ["Philosophy", "History", "Literature", "Sociology", "Political Science", "Linguistics"],
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=70",
    color: "from-lavender to-magenta",
    students: "9,330",
  },
];

export const Faculties = () => {
  return (
    <section id="academics" className="relative py-20 sm:py-28 academic-grid">
      <div className="container">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="sticker liquid-glass mb-4 text-ink">faculties · 6 schools</span>
            <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tighter">
              Six faculties.<br />
              <span className="font-serif-it text-grad-hero">42,000 minds.</span>
            </h2>
            <p className="text-sm text-muted-foreground mt-4 max-w-md">
              Each faculty groups multiple departments, research centres and labs — taught by faculty who actually publish, build and ship.
            </p>
          </div>
          <a href="/academics" className="self-start liquid-glass shine rounded-full px-5 py-2.5 text-[13px] font-semibold text-ink hover:scale-[1.03] transition-transform">
            All schools & departments →
          </a>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {faculties.map((f, i) => (
            <Reveal key={f.name} delay={i * 80}>
              <article className="group relative liquid-glass rounded-3xl overflow-hidden tilt h-full flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <LazyImage src={f.img} alt={f.short} wrapperClassName="absolute inset-0" className="group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${f.color} opacity-50 mix-blend-multiply`} />
                  <div className="absolute top-3 left-3 sticker bg-white/85 backdrop-blur text-ink">
                    {f.students} students
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-display font-bold text-white text-2xl tracking-tight leading-tight drop-shadow-lg">
                      {f.short}
                    </h3>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Faculty</p>
                  <p className="text-sm font-medium text-ink leading-snug mt-1">{f.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-3">Dean · {f.dean}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {f.departments.map((d) => (
                      <span key={d} className="text-[10.5px] px-2 py-1 rounded-full bg-white/70 border border-white text-ink/80 font-medium">
                        {d}
                      </span>
                    ))}
                  </div>

                  <a href={`/faculty/${f.short.toLowerCase().replace(/\s+/g, "-")}`} className="mt-5 text-[13px] font-semibold text-ink inline-flex items-center gap-1 group/link">
                    Explore faculty
                    <span className="transition-transform group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
