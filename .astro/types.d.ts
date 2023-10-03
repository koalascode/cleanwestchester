declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (data: CollectionEntry<C>) => boolean
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"articles": {
"biodiversityloss.md": {
  id: "biodiversityloss.md",
  slug: "biodiversityloss",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"bronxriverpolution.md": {
  id: "bronxriverpolution.md",
  slug: "bronxriverpolution",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"crotonpointaerialphotos.md": {
  id: "crotonpointaerialphotos.md",
  slug: "crotonpointaerialphotos",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"crotonpointrestoration.md": {
  id: "crotonpointrestoration.md",
  slug: "crotonpointrestoration",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"deforestationincongo.md": {
  id: "deforestationincongo.md",
  slug: "deforestationincongo",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"environmentalissuesglobalscale.md": {
  id: "environmentalissuesglobalscale.md",
  slug: "environmentalissuesglobalscale",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"favoritewildlifesites.md": {
  id: "favoritewildlifesites.md",
  slug: "ourfavoritewildlifespotsnearby",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"flawedrenewablerussiaukraine.md": {
  id: "flawedrenewablerussiaukraine.md",
  slug: "flawedenergydependancerussiaukraine",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"hurricanidamitigation.md": {
  id: "hurricanidamitigation.md",
  slug: "hurricanidamitigation",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"mediaeffectonozonelayer.md": {
  id: "mediaeffectonozonelayer.md",
  slug: "mediaimpactonozonelayer",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"oceanoilspills.md": {
  id: "oceanoilspills.md",
  slug: "oceanoilspills",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"ozonelayerstillunderthreat.md": {
  id: "ozonelayerstillunderthreat.md",
  slug: "ozonelayerstillunderthreat",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"physicsbehindlightningvid.md": {
  id: "physicsbehindlightningvid.md",
  slug: "physicsbehindlightningvid",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"sciencebehindozonelayer.md": {
  id: "sciencebehindozonelayer.md",
  slug: "sciencebehindozonelayer",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"westchesterairquality.md": {
  id: "westchesterairquality.md",
  slug: "westchesterairqualityozone",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"westchesterelectricvehicles.md": {
  id: "westchesterelectricvehicles.md",
  slug: "westchesterelectricvehicles",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"westchesterwastedisposal.md": {
  id: "westchesterwastedisposal.md",
  slug: "westchesterwastedisposal",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
"westchesterwastewar.md": {
  id: "westchesterwastewar.md",
  slug: "westchesterswastewar",
  body: string,
  collection: "articles",
  data: InferEntrySchema<"articles">
},
},
"cleanups": {
"cleanup1.md": {
  id: "cleanup1.md",
  slug: "cleanup1",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup10.md": {
  id: "cleanup10.md",
  slug: "cleanup10",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup11.md": {
  id: "cleanup11.md",
  slug: "cleanup11",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup12.md": {
  id: "cleanup12.md",
  slug: "cleanup12",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup13.md": {
  id: "cleanup13.md",
  slug: "cleanup13",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup14.md": {
  id: "cleanup14.md",
  slug: "cleanup14",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup15.md": {
  id: "cleanup15.md",
  slug: "cleanup15",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup16.md": {
  id: "cleanup16.md",
  slug: "cleanup16",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup2.md": {
  id: "cleanup2.md",
  slug: "cleanup2",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup3.md": {
  id: "cleanup3.md",
  slug: "cleanup3",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup4.md": {
  id: "cleanup4.md",
  slug: "cleanup4",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup5.md": {
  id: "cleanup5.md",
  slug: "cleanup5",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup6.md": {
  id: "cleanup6.md",
  slug: "cleanup6",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup7.md": {
  id: "cleanup7.md",
  slug: "cleanup7",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup8.md": {
  id: "cleanup8.md",
  slug: "cleanup8",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
"cleanup9.md": {
  id: "cleanup9.md",
  slug: "cleanup9",
  body: string,
  collection: "cleanups",
  data: InferEntrySchema<"cleanups">
},
},
"members": {
"aaronanidjar.md": {
  id: "aaronanidjar.md",
  slug: "aaronanidjar",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
"bryanchung.md": {
  id: "bryanchung.md",
  slug: "bryanchung",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
"chloeji.md": {
  id: "chloeji.md",
  slug: "chloeji",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
"evanlee.md": {
  id: "evanlee.md",
  slug: "evanlee",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
"izzyzhu.md": {
  id: "izzyzhu.md",
  slug: "izzyzhu",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
"kellydeng.md": {
  id: "kellydeng.md",
  slug: "kellydeng",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
"kevindaniel.md": {
  id: "kevindaniel.md",
  slug: "kevindaniel",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
"kevinjiang.md": {
  id: "kevinjiang.md",
  slug: "kevinjiang",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
"maxmcevoy.md": {
  id: "maxmcevoy.md",
  slug: "maxmcevoy",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
"razamalik.md": {
  id: "razamalik.md",
  slug: "razamalik",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
"rickyang.md": {
  id: "rickyang.md",
  slug: "rickyang",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
"sophiawu.md": {
  id: "sophiawu.md",
  slug: "sophiawu",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
"zacharyarnold.md": {
  id: "zacharyarnold.md",
  slug: "zacharyarnold",
  body: string,
  collection: "members",
  data: InferEntrySchema<"members">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
