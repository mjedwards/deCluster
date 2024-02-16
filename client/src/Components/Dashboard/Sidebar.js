import React from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

function DashSidebar({ navigation, teams }) {
	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}
	return (
		<div className='hidden lg:absolute lg:left-0 lg:z-50 lg:flex lg:w-72 lg:flex-col h-full'>
			<div className='flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 h-full'>
				<div className='flex h-16 shrink-0 items-center'>
					<img
						className='h-8 w-auto'
						src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
						alt='Your Company'
					/>
				</div>
				<nav className='flex flex-1 flex-col'>
					<ul role='list' className='flex flex-1 flex-col gap-y-7'>
						<li>
							<ul role='list' className='-mx-2 space-y-1'>
								{navigation.map((item) => (
									<li key={item.name}>
										<a
											href={item.href}
											className={classNames(
												item.current
													? "bg-gray-800 text-white"
													: "text-gray-400 hover:text-white hover:bg-gray-800",
												"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
											)}>
											<item.icon
												className='h-6 w-6 shrink-0'
												aria-hidden='true'
											/>
											{item.name}
										</a>
									</li>
								))}
							</ul>
						</li>
						<li>
							<div className='text-xs font-semibold leading-6 text-gray-400'>
								Your teams
							</div>
							<ul role='list' className='-mx-2 mt-2 space-y-1'>
								{teams.map((team) => (
									<li key={team.name}>
										<a
											href={team.href}
											className={classNames(
												team.current
													? "bg-gray-800 text-white"
													: "text-gray-400 hover:text-white hover:bg-gray-800",
												"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
											)}>
											<span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white'>
												{team.initial}
											</span>
											<span className='truncate'>{team.name}</span>
										</a>
									</li>
								))}
							</ul>
						</li>
						<li className=''>
							<a
								href='#'
								className='group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white'>
								<Cog6ToothIcon
									className='h-6 w-6 shrink-0'
									aria-hidden='true'
								/>
								Settings
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default DashSidebar;
