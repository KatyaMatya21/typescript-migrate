export type Item = {
	id: number,
	completed: boolean,
	title: string
};

export type ItemList = Item[];


/**
 * Empty ItemQuery type, based on the Empty @enum.
 */
export type EmptyItemQuery = {};

/**
 * Reference to the only EmptyItemQuery instance.
 */
export const emptyItemQuery: EmptyItemQuery = {};

export type ItemQuery =
	{id: number} |
	{completed: boolean} |
	EmptyItemQuery;

export type ItemUpdate =
	{id: number, title: string}|
	{id: number, completed: boolean};
