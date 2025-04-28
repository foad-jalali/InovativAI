interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  badge?: string
}

const SectionHeading = ({ title, subtitle, centered = true, badge }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 mt-28 ${centered ? "text-center" : "text-left"}`} data-aos="fade-up">
      {badge && (
        <div
          className={`inline-block bg-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-full px-3 py-1 text-sm mb-4 ${centered ? "mx-auto" : ""}`}
        >
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className={`text-gray-300 ${centered ? "max-w-2xl mx-auto" : ""}`}>{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
