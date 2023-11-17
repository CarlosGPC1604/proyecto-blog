export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Blog UNIVAM",
	description:
		"Blog creado a manera de proyecto para la materia de Bases de Datos.",
	navItems: [
		{
			label: "Inicio",
			href: "/",
		},
		{
			label: "Categorías",
			href: "/categorias",
		},
		{
			label: "Mis blogs",
			href: "/mis-blogs",
		},
		{
			label: "Perfil",
			href: "/perfil",
		},
	],
	navMenuItems: [
		{
			label: "Categorías",
			href: "/categorias",
		},
		{
			label: "Mis blogs",
			href: "/mis-blogs",
		},
		{
			label: "Perfil",
			href: "/perfil",
		},
		{
			label: "Cerrar sesión",
			href: "/perfil",
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev",
	},
};
