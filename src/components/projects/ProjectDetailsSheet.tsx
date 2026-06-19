import { ExternalLink } from 'lucide-react'
import type { ReactNode } from 'react'
import GitHubIcon from '~/assets/icons/github.svg?react'
import { SideSheet } from '~/components/ui/SideSheet'
import type { Project } from '~/utils/projectsMock'
import { Badge } from '../ui/Badge'
import { Icon } from '../ui/Icon'

interface ProjectDetailsSheetProps {
	project: Project
	children: ReactNode
}

export function ProjectDetailsSheet({
	project,
	children,
}: ProjectDetailsSheetProps) {
	const { title, description, tags, repoUrl, liveDemoUrl, gifUrl } = project

	return (
		<SideSheet>
			<SideSheet.Trigger>{children}</SideSheet.Trigger>

			<SideSheet.Content>
				<SideSheet.Header title={title} />

				<SideSheet.Body>
					{gifUrl && (
						<div className="w-full h-48 md:h-60 bg-slate-900 rounded-lg overflow-hidden mb-6 border border-slate-800">
							<img
								src={gifUrl}
								alt={`Demonstração do projeto ${title}`}
								className="w-full h-full object-cover"
							/>
						</div>
					)}

					<div className="text-slate-300 text-sm leading-relaxed space-y-4">
						<p>{description}</p>
					</div>

					<div className="flex flex-wrap gap-2 mt-8">
						{tags.map((tag) => (
							<Badge key={tag}>{tag}</Badge>
						))}
					</div>
				</SideSheet.Body>

				<SideSheet.Footer>
					<div className="flex gap-3">
						<a
							href={repoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-md transition-colors "
						>
							<Icon svg={GitHubIcon} size={'md'} />
							Repositório
						</a>

						{liveDemoUrl && (
							<a
								href={liveDemoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 bg-teal-500 hover:bg-teal-600 text-slate-950 text-sm font-bold rounded-md transition-colors"
							>
								<ExternalLink className="w-4 h-4" />
								Live Demo
							</a>
						)}
					</div>
				</SideSheet.Footer>
			</SideSheet.Content>
		</SideSheet>
	)
}
