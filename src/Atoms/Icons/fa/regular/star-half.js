// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFarStarHalf = props => <svg viewBox="0 0 576 512" {...props}><path d="M288 385.3l-124.3 65.4 23.7-138.4-100.6-98 139-20.2 62.2-126V0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6v-54.3z" /></svg>;

export const FarStarHalf = withStyle(SvgFarStarHalf, "FarStarHalf", false);