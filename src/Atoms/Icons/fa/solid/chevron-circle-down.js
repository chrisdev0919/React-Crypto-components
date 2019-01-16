// @flow strict
import React from 'react';
import withStyle from "../../withStyle";

const SvgFasChevronCircleDown = props => <svg viewBox="0 0 512 512" {...props}><path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z" /></svg>;

export const FasChevronCircleDown = withStyle(SvgFasChevronCircleDown, "FasChevronCircleDown", false);