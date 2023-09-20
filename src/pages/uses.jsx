import { NextSeo } from "next-seo"
import { Card } from "@/components/Card"
import { Section } from "@/components/Section"
import { SimpleLayout } from "@/components/SimpleLayout"
import siteMeta from "@/data/siteMeta"

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul className="space-y-16">{children}</ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <NextSeo
        title="Uses - Max Vresch"
        description={siteMeta.description}
        canonical="https://maxvresch.com/uses"
        openGraph={{
          url: "https://maxvresch.com/uses",
          images: [
            {
              url: `https://${siteMeta.siteUrl}/api/og?title=Uses&desc=Things I use every day to get my work done.`,
              width: 1200,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          siteName: siteMeta.siteUrl,
        }}
      />
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, Intel i7, 16GB RAM (2019)">
              I don&apos;t know how Apple makes such a tiny laptop so fast and responsive, no matter what load I put on
              it.
            </Tool>
            <Tool title="Dell XPS 8950">
              12th Generation i7 with oodles of memory and 4TB of NVMe drives running Bluefin Linux.
            </Tool>
            <Tool title="Custom split wireless keyboard - Kyria">
              I had terrible RSI problems until I switched to the Split Keyboard.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
