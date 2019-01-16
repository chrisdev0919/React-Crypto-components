// @flow strict
import React from 'react';
import withStyle from "../withStyle";

const SvgCryptoIop = props => <svg viewBox="0 0 32 32" {...props}><g fill="none" fillRule="evenodd"><circle cx={16} cy={16} fill="#4cb8d1" fillRule="nonzero" r={16} /><path d="M10.123 8.283l.398-.717A1.09 1.09 0 0 1 11.473 7h8.955c.371 0 .716.192.917.508h4.058v7.14l.449.79a1.14 1.14 0 0 1 0 1.124l-.449.79v3.072l-3.437 2.978-.592 1.041a1.09 1.09 0 0 1-.946.557h-8.955a1.09 1.09 0 0 1-.952-.566l-.025-.044H6.498v-7.2l-.355-.639a1.14 1.14 0 0 1 0-1.104l.355-.639v-3.233zm1.35-.164L7.095 16l4.378 7.881h8.955L24.905 16l-4.477-7.881zm.405.712h8.149L24.1 16l-4.073 7.17h-8.149L7.895 16zm1.883 3.05l-2.189 4.068 2.19 4.068h4.676l2.189-4.068-2.19-4.068z" fill="#fff" /></g></svg>;

export const CryptoIop = withStyle(SvgCryptoIop, "CryptoIop", true);