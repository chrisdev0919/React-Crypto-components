// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFabSketch = props => <svg viewBox="0 0 494.4 512" {...props}><path d="M18.5 162.2L0 187.1h90.5l6.9-130.7-78.9 105.8zM387.3 45.7L258.7 32l135.7 147.2-7.1-133.5zM103.2 218.3l-11.2-22H.9L225.8 458 103.2 218.3zm2-31.2h284l-81.5-88.5L247.3 33 105.2 187.1zm297.3 9.1L268.6 458l224.8-261.7h-90.9zM406.4 69L397 56.4l.9 17.3 6.1 113.4h90.3L406.4 69zM104.5 93.5l-4.6 85.6L235.7 32 107.1 45.7l-2.6 47.8zm287.7 102.7h-290l42.4 82.9L247.3 480l144.9-283.8z" /></svg>;

export const FabSketch = withStyle(SvgFabSketch, "FabSketch", false);