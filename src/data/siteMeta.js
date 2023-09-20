import logoAmazon from "@/images/logos/aws.svg"
import logoMicrosoft from "@/images/logos/azure.svg"
import logoCaptainhook from "@/images/logos/captainhook.svg"
import logoClarity from "@/images/logos/clarity.jpg"
import logoFleek from "@/images/logos/fleeksvg.svg"

import logoGolang from "@/images/logos/icons8-golang.svg"
import logoKubernetes from "@/images/logos/kubernetes.svg"
import logoVanilla from "@/images/logos/vanilla.svg"
import logoXOR from "@/images/logos/xor.jpg"
const siteMeta = {
  title: "Max Vresch",
  description: "Max Vresch is a developer.",
  copyright: "Max Vresch",
  author: {
    name: "Max Vresch",
    email: "MaxFreshWeb@gmail.com",
    twitter: "https://twitter.com/MVresch",
    instagram: "https://instagram.com/maxvresch",
    github: "https://github.com.com/vresch",
    linkedin: "https://linkedin.com/in/vresch",
  },
  siteUrl: "https://maxvresch.com",
}
export const resume = [
  {
    company: "Boosty Labs",
    title: "Principal Developer Advocate",
    logo: logoAmazon,
    start: "2019",
    end: {
      label: "Present",
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: "Getir",
    title: "Principal Cloud Developer Advocate",
    logo: logoMicrosoft,
    start: "2018",
    end: "2019",
  },
  {
    company: "SwipeIn",
    title: "HR Management tool",
    logo: logoXOR,
    start: "2017",
    end: "2018",
  },
  {
    company: "Ceragon",
    title: "Full Stack Developer",
    logo: logoClarity,
    start: "2016",
    end: "2017",
  },
]
export const projects = [
  {
    name: "Yield",
    description: "Install and manage all the tools you need to be productive.",
    link: { href: "https://getfleek.dev", label: "getfleek.dev" },
    logo: logoFleek,
  },
  {
    name: "Affinidi",
    description:
      "Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.",
    link: { href: "https://vanillaos.org", label: "vanillaos.org" },
    logo: logoVanilla,
  },
  {
    name: "Getir",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    link: { href: "https://getir.com", label: "getir.com" },
    logo: logoCaptainhook,
  },
  {
    name: "Stoop",
    description: "Production-Grade Container Scheduling and Management",
    link: { href: "https://mystoop.com", label: "mystoop.com" },
    logo: logoKubernetes,
  },
  {
    name: "SwipeIn",
    description: "Build fast, reliable, and efficient software at scale",
    link: { href: "https://go.dev", label: "go.dev" },
    logo: logoGolang,
  },
]

export default siteMeta
