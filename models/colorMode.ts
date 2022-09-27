import {PaletteMode} from '@mui/material';
import {createModel} from '@rematch/core';
import {RootModel} from '.';

type ComplexState = {mode: PaletteMode};

export const colorMode = createModel<RootModel>()({
	state: {mode: "dark"} as ComplexState,
	reducers: {
		update(state, payload: PaletteMode) {
            return {mode: payload};
		},
	},
});
