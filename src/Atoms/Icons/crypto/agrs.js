// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoAgrs = props => <svg viewBox="0 0 32 32" {...props}><g fill="none" fillRule="evenodd"><circle cx={16} cy={16} fill="#f49e00" r={16} /><path d="M19.755 17.334C22.001 13.815 23.75 8 23.75 8l-3.745.849-1.371 4.85c-.129-3.636-2.622-4.967-2.622-4.967-1.997-.973-3.777-.545-5.06.124-1.588.826-2.743 2.266-3.296 3.924-.786 2.359-.69 5.006-.586 6.204.042.562.166 1.115.37 1.643 1.378 3.573 5.195 3.37 5.195 3.37 3.497-.124 5.622-4.242 5.622-4.242l1.002 3.028c.898 1.519 2.887.95 3.296.865.072-.016.136-.024.209-.04L25 23.267v-.973c-4.868.132-5.245-4.959-5.245-4.959m-4.739 3.659a2.369 2.369 0 0 1-1.098.638c-.907.226-1.604-.155-2.085-.622a3.937 3.937 0 0 1-1.059-1.978c-.882-4.99.337-7.177 1.147-8.182a2.258 2.258 0 0 1 1.868-.864c3.144.164 3.85 6.742 3.85 6.742-.89 2.335-2.037 3.69-2.623 4.266" fill="#fff" fillRule="nonzero" /></g></svg>;

export const CryptoAgrs = withStyle(SvgCryptoAgrs, "CryptoAgrs", true);