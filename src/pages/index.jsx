import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { LinkItem } from '@/components/LinkItem'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import logoBubble from '@/images/logos/bubble.svg'
import logoIBM from '@/images/logos/ibm.svg'
import logoUber from '@/images/logos/uber.svg'
import logoMicrosoft from '@/images/logos/microsoft.svg'
import logoAmazon from '@/images/logos/amazon.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>{'Read'}</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-sky-400 dark:focus:ring-sky-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Microsoft',
      title: 'Software Engineer',
      team: 'Azure Storage DevEx, Python SDK',
      logo: logoMicrosoft,
      link: 'https://www.microsoft.com',
      start: '03/24',
      end: 'Present',
    },
    {
      company: 'Microsoft',
      title: 'Software Engineer Intern',
      team: 'Azure Storage DevEx, PyTorch ML Framework',
      logo: logoMicrosoft,
      link: 'https://www.microsoft.com',
      start: '06/23',
      end: '08/23',
    },
    {
      company: 'Amazon Web Services',
      title: 'Software Engineer Intern',
      team: 'AWS Core Networking',
      logo: logoAmazon,
      link: 'https://aws.amazon.com',
      start: '04/23',
      end: '06/23',
    },
    {
      company: 'Uber',
      title: 'Software Engineer Intern',
      team: 'Location & TripContext',
      logo: logoUber,
      link: 'https://www.uber.com',
      start: '06/22',
      end: '08/22',
    },
    {
      company: 'Bubble',
      title: 'Software Engineer Intern',
      team: 'Editor Language & User Data',
      link: 'https://www.bubble.io',
      logo: logoBubble,
      start: '01/22',
      end: '05/22',
    },
    {
      company: 'IBM',
      title: 'Software Engineer Intern',
      team: 'Intelligent Information',
      link: 'https://www.ibm.com',
      logo: logoIBM,
      start: '03/21',
      end: '08/21',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4 divide-y divide-dotted">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-4 flex h-10 w-10 flex-none items-center justify-center">
              <a href={role.link}>
                <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
              </a>
            </div>
            <dl className="mt-4 flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>

              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-800 dark:text-zinc-200">
                {role.title}
              </dd>

              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>

              <dt className="sr-only">Team</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.team}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="mailto:weirongw@umich.edu"
        download="WeirongWuResume"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Contact for Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Peter Wu</title>
        <meta
          name="Peter Wu"
          content="Hi, I am Peter! I am a Software Engineer at Microsoft working on Cloud + AI. I graduated from the University of Michigan studying Computer, Science, Pure Mathematics, and Statistics. Please feel free to reach out any time: weirongw@umich.edu."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Peter Wu
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi, I am Peter! I am a Software Engineer at{' '}
            <LinkItem href="http://www.microsoft.com">
              Microsoft
            </LinkItem>{' '}
            working on Cloud + AI.
            I graduated from{' '}
            <LinkItem href="https://cse.engin.umich.edu/">
              University of Michigan
            </LinkItem>{' '}
            studying Computer Science, Pure Mathematics, and Statistics.
            Please feel free to reach out any time: weirongw@umich.edu.
          </p>

          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            For more information, check out my{' '}
            <LinkItem href="/about">About Page</LinkItem>.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/weirongw23"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/weirongw23"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/weirongw/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <!-- <Newsletter /> -->
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
