// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoMzc = props => <svg viewBox="0 0 32 32" {...props}><g fill="none" fillRule="evenodd"><circle cx={16} cy={16} r={16} fill="#FFAA05" /><path fill="#FFF" d="M16.811 11.567v1.863h2.214l-1 1.148h-1.487v1.443h1.547l-.758 1.148h-.789v2.944l-1.273 1.736v-4.68h-1.76l.971-1.148h.789v-1.443h-2.487l1-1.148h1.487V11.5c-.733-.793-1.744-1.19-3.033-1.19-2.472 0-4.428 2.635-4.428 5.255 0 1.746.4 3.228 1.198 4.445l-1.38 1.604C6.541 20.012 6 18.182 6 16.124 6 11.605 9.89 9 12.641 9c1.684 0 2.974.706 3.87 2.117 1.714-1.176 3.467-1.764 5.259-1.764 2.744 0 4.23 3.35 4.23 6.55 0 4.258-2.866 5.902-3.912 6.094a.207.207 0 0 1-.205-.082.194.194 0 0 1 .051-.276c1.619-1.088 2.428-2.755 2.428-5 0-4.901-2.517-6.035-4.367-6.035a5.693 5.693 0 0 0-3.184.963z" /></g></svg>;

export const CryptoMzc = withStyle(SvgCryptoMzc, "CryptoMzc", true);