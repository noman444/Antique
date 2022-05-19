(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [6], { 1316: function(e, t, n) { "use strict";
            n.r(t); var c, r, a, o = n(0),
                i = n(2),
                s = n(83),
                b = n(73),
                l = n(88),
                u = n(102),
                j = n(46),
                d = n(779),
                x = n(351),
                O = n(21),
                p = n(341),
                f = n(862),
                h = n(349),
                m = n(753),
                v = n(809),
                g = n(826),
                k = n(13),
                w = n(7),
                y = n(731),
                N = n(37),
                B = n(141),
                C = n(754),
                I = n(1),
                S = Object(w.e)(i.m)(c || (c = Object(k.a)(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n"])), (function(e) { return e.theme.colors.background }), (function(e) { return e.theme.colors.cardBorder })),
                L = function(e) { var t = e.proposal,
                        n = Object(O.b)().t,
                        c = new Date(1e3 * t.start),
                        r = new Date(1e3 * t.end); return Object(I.jsxs)(i.s, { mb: "16px", children: [Object(I.jsx)(i.v, { children: Object(I.jsx)(i.Q, { as: "h3", scale: "md", children: n("Details") }) }), Object(I.jsxs)(i.t, { children: [Object(I.jsxs)(i.O, { alignItems: "center", mb: "8px", children: [Object(I.jsx)(i.Nb, { color: "black", children: n("Identifier") }), Object(I.jsx)(i.Z, { href: "".concat(C.b, "/").concat(t.id), ml: "8px", children: t.id.slice(0, 8) })] }), Object(I.jsxs)(i.O, { alignItems: "center", mb: "8px", children: [Object(I.jsx)(i.Nb, { color: "black", children: n("Creator") }), Object(I.jsx)(i.Z, { href: Object(N.e)(t.author, "address"), ml: "8px", children: Object(B.a)(t.author) })] }), Object(I.jsxs)(i.O, { alignItems: "center", mb: "16px", children: [Object(I.jsx)(i.Nb, { color: "black", children: n("Snapshot") }), Object(I.jsx)(i.Z, { href: Object(N.e)(t.snapshot, "block"), ml: "8px", children: t.snapshot })] }), Object(I.jsxs)(S, { p: "16px", children: [Object(I.jsx)(v.a, { proposalState: t.state, mb: "8px" }), Object(I.jsxs)(i.O, { alignItems: "center", children: [Object(I.jsx)(i.Nb, { color: "black", fontSize: "14px", children: n("Start Date") }), Object(I.jsx)(i.Nb, { ml: "8px", children: Object(y.default)(c, "yyyy-MM-dd HH:mm") })] }), Object(I.jsxs)(i.O, { alignItems: "center", children: [Object(I.jsx)(i.Nb, { color: "black", fontSize: "14px", children: n("End Date") }), Object(I.jsx)(i.Nb, { ml: "8px", children: Object(y.default)(r, "yyyy-MM-dd HH:mm") })] })] })] })] }) },
                A = n(760),
                D = n.n(A),
                P = n(86),
                V = Object(w.e)(i.Nb)(r || (r = Object(k.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),
                E = function(e) { var t = e.choices,
                        n = e.votes,
                        c = Object(O.b)().t,
                        r = Object(m.a)(n),
                        a = Object(d.e)(),
                        o = Object(s.c)().account,
                        b = Object(m.f)(n); return Object(I.jsxs)(i.s, { children: [Object(I.jsx)(i.v, { children: Object(I.jsx)(i.Q, { as: "h3", scale: "md", children: c("Current Results") }) }), Object(I.jsxs)(i.t, { children: [a === j.h.IDLE && t.map((function(e, t) { var n = r[e] || [],
                                    a = Object(m.f)(n),
                                    s = 0 === b ? 0 : a / b * 100,
                                    l = n.some((function(e) { return o && e.voter.toLowerCase() === o.toLowerCase() })); return Object(I.jsxs)(i.m, { mt: t > 0 ? "24px" : "0px", children: [Object(I.jsxs)(i.O, { alignItems: "center", mb: "8px", children: [Object(I.jsx)(V, { mb: "4px", title: e, children: e }), l && Object(I.jsxs)(i.Lb, { variant: "success", outline: !0, ml: "8px", children: [Object(I.jsx)(i.z, { mr: "4px" }), " ", c("Voted")] })] }), Object(I.jsx)(i.m, { mb: "4px", children: Object(I.jsx)(i.wb, { primaryStep: s, scale: "sm" }) }), Object(I.jsxs)(i.O, { alignItems: "center", justifyContent: "space-between", children: [Object(I.jsx)(i.Nb, { color: "black", children: c("%total% Votes", { total: Object(P.c)(a, 0, 2) }) }), Object(I.jsxs)(i.Nb, { children: [s.toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 }), "%"] })] })] }, e) })), a === j.h.LOADING && D()(t.length).map((function(e, t) { return Object(I.jsx)(i.m, { mt: t > 0 ? "24px" : "0px", children: Object(I.jsx)(i.Bb, { height: "36px", mb: "4px" }) }, e) }))] })] }) },
                F = n(6),
                z = n(3),
                T = n.n(z),
                M = n(12),
                H = n(11),
                Q = n(59),
                K = n(170),
                J = n(173),
                Y = n(17),
                Z = n(177),
                G = n(20),
                R = n(139);! function(e) { e.MAIN = "main", e.DETAILS = "details" }(a || (a = {})); var U, W, _, X, q, $, ee, te, ne = n(802),
                ce = function(e) { var t = e.vote,
                        n = e.total,
                        c = e.isPending,
                        r = e.isLoading,
                        a = e.onConfirm,
                        o = e.onViewDetails,
                        s = e.onDismiss,
                        b = Object(O.b)().t; return Object(I.jsxs)(I.Fragment, { children: [Object(I.jsxs)(ne.a, { children: [Object(I.jsx)(i.Nb, { color: "dark", mb: "8px", textTransform: "uppercase", fontSize: "12px", bold: !0, children: b("Voting For") }), Object(I.jsx)(V, { bold: !0, fontSize: "20px", mb: "8px", title: t.label, children: t.label }), Object(I.jsx)(i.Nb, { color: "dark", mb: "8px", textTransform: "uppercase", fontSize: "12px", bold: !0, children: b("Your Voting Power") }), r ? Object(I.jsx)(i.Bb, { height: "64px", mb: "24px" }) : Object(I.jsxs)(ne.b, { onClick: o, style: { cursor: "pointer" }, children: [Object(I.jsx)(i.Nb, { bold: !0, fontSize: "20px", children: Object(P.c)(n, 0, 3) }), Object(I.jsx)(i.T, { scale: "sm", variant: "text", children: Object(I.jsx)(i.D, { width: "24px" }) })] }), Object(I.jsx)(i.Nb, { as: "p", color: "black", fontSize: "14px", children: b("Are you sure you want to vote for the above choice? This action cannot be undone.") })] }), Object(I.jsx)(i.p, { isLoading: c, endIcon: c ? Object(I.jsx)(i.i, { spin: !0, color: "currentColor" }) : null, disabled: r || 0 === n, width: "100%", mb: "8px", onClick: a, children: b("Confirm Vote") }), Object(I.jsx)(i.p, { variant: "secondary", width: "100%", onClick: s, children: b("Cancel") })] }) },
                re = n(827),
                ae = n(828),
                oe = function(e) { var t, n = e.onSuccess,
                        c = e.proposalId,
                        r = e.vote,
                        b = e.block,
                        l = e.onDismiss,
                        u = Object(o.useState)(a.MAIN),
                        d = Object(H.a)(u, 2),
                        x = d[0],
                        p = d[1],
                        f = Object(o.useState)(!0),
                        h = Object(H.a)(f, 2),
                        v = h[0],
                        g = h[1],
                        k = Object(o.useState)(!1),
                        w = Object(H.a)(k, 2),
                        y = w[0],
                        N = w[1],
                        B = Object(s.c)().account,
                        C = Object(O.b)().t,
                        S = Object(K.a)().toastError,
                        L = Object(G.a)().library,
                        A = Object(R.a)().theme,
                        D = Object(ae.a)(b, v),
                        P = D.isLoading,
                        V = D.total,
                        E = D.cakeBalance,
                        z = D.cakeVaultBalance,
                        Q = D.cakePoolBalance,
                        J = D.poolsBalance,
                        U = D.cakeBnbLpBalance,
                        W = D.verificationHash,
                        _ = x === a.MAIN,
                        X = _ ? null : function() { return p(a.MAIN) },
                        q = (t = {}, Object(Y.a)(t, a.MAIN, C("Confirm Vote")), Object(Y.a)(t, a.DETAILS, C("Voting Power")), t),
                        $ = function() { g(!1), l() },
                        ee = function() { var e = Object(M.a)(T.a.mark((function e() { var t, a, o; return T.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, N(!0), t = JSON.stringify(Object(F.a)(Object(F.a)({}, Object(m.e)()), {}, { type: j.g.VOTE, payload: { proposal: c, choice: r.value, metadata: { votingPower: V.toString(), verificationHash: W } } })), e.next = 5, Object(Z.c)(L, B, t);
                                        case 5:
                                            return a = e.sent, o = { address: B, msg: t, sig: a }, e.next = 9, Object(m.i)(o);
                                        case 9:
                                            return N(!1), e.next = 12, n();
                                        case 12:
                                            $(), e.next = 20; break;
                                        case 15:
                                            e.prev = 15, e.t0 = e.catch(0), N(!1), S(C("Error"), null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message), console.error(e.t0);
                                        case 20:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [0, 15]
                                ]) }))); return function() { return e.apply(this, arguments) } }(); return Object(I.jsx)(i.fb, { title: q[x], onBack: X, onDismiss: l, hideCloseButton: !_, headerBackground: A.colors.gradients.cardHeader, children: Object(I.jsxs)(i.m, { mb: "24px", width: "320px", children: [x === a.MAIN && Object(I.jsx)(ce, { vote: r, isLoading: P, isPending: y, total: V, onConfirm: ee, onViewDetails: function() { return p(a.DETAILS) }, onDismiss: $ }), x === a.DETAILS && Object(I.jsx)(re.a, { total: V, cakeBalance: E, cakeVaultBalance: z, cakePoolBalance: Q, poolsBalance: J, cakeBnbLpBalance: U })] }) }) },
                ie = ["proposal"],
                se = w.e.label(U || (U = Object(k.a)(["\n  align-items: center;\n  border: 1px solid ", ";\n  border-radius: 16px;\n  cursor: ", ";\n  display: flex;\n  margin-bottom: 16px;\n  padding: 16px;\n"])), (function(e) { var t = e.theme,
                        n = e.isChecked; return t.colors[n ? "success" : "cardBorder"] }), (function(e) { return e.isDisabled ? "not-allowed" : "pointer" })),
                be = w.e.div(W || (W = Object(k.a)(["\n  flex: 1;\n  padding-left: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 0;\n"]))),
                le = function(e) { var t = e.proposal,
                        n = Object(Q.a)(e, ie),
                        c = Object(o.useState)(null),
                        r = Object(H.a)(c, 2),
                        a = r[0],
                        b = r[1],
                        l = Object(O.b)().t,
                        j = Object(K.a)().toastSuccess,
                        d = Object(u.b)(),
                        p = Object(s.c)().account,
                        f = function() { var e = Object(M.a)(T.a.mark((function e() { return T.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            j(l("Vote cast!")), d(Object(x.d)({ proposalId: t.id, block: Number(t.snapshot) }));
                                        case 2:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } }(),
                        h = Object(i.fc)(Object(I.jsx)(oe, { onSuccess: f, proposalId: t.id, vote: a, block: Number(t.snapshot) })),
                        m = Object(H.a)(h, 1)[0]; return Object(I.jsxs)(i.s, Object(F.a)(Object(F.a)({}, n), {}, { children: [Object(I.jsx)(i.v, { children: Object(I.jsx)(i.Q, { as: "h3", scale: "md", children: l("Cast your vote") }) }), Object(I.jsxs)(i.t, { children: [t.choices.map((function(e, t) { var n = t + 1 === (null === a || void 0 === a ? void 0 : a.value); return Object(I.jsxs)(se, { isChecked: n, isDisabled: !p, children: [Object(I.jsx)("div", { style: { flexShrink: 0 }, children: Object(I.jsx)(i.yb, { scale: "sm", value: e, checked: n, onChange: function() { b({ label: e, value: t + 1 }) }, disabled: !p }) }), Object(I.jsx)(be, { children: Object(I.jsx)(i.Nb, { as: "span", title: e, children: e }) })] }, e) })), p ? Object(I.jsx)(i.p, { onClick: m, disabled: null === a, children: l("Cast Vote") }) : Object(I.jsx)(J.a, {})] })] })) },
                ue = n(812),
                je = n.n(ue),
                de = Object(w.e)(i.O)(_ || (_ = Object(k.a)(["\n  border-bottom: 1px solid ", ";\n  padding: 16px 24px;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                xe = Object(w.e)(i.Bb)(X || (X = Object(k.a)(["\n  flex: 1;\n"]))),
                Oe = function() { return Object(I.jsx)(i.m, { children: D()(10).map((function(e) { return Object(I.jsxs)(de, { children: [Object(I.jsx)(i.Bb, { height: "21px", mr: "32px", width: "100px" }), Object(I.jsx)(xe, { height: "21px", mr: "32px", width: "100%" }), Object(I.jsx)(xe, { height: "21px", width: "100%" })] }, e) })) }) },
                pe = Object(w.e)(i.m).attrs({ alignItems: "center" })(q || (q = Object(k.a)(["\n  grid-area: address;\n"]))),
                fe = Object(w.e)(i.m)($ || ($ = Object(k.a)(["\n  grid-area: choice;\n  overflow: hidden;\n"]))),
                he = Object(w.e)(i.m)(ee || (ee = Object(k.a)(["\n  justify-self: end;\n  grid-area: vote;\n"]))),
                me = Object(w.e)(i.P)(te || (te = Object(k.a)(["\n  border-bottom: 1px solid ", ";\n  grid-gap: 8px;\n  grid-template-areas:\n    'address address address'\n    'choice choice vote';\n  grid-template-columns: 1fr 1fr 120px;\n  padding: 8px 16px;\n\n  ", " {\n    grid-gap: 16px;\n    grid-template-areas: 'address choice vote';\n    padding: 16px 24px;\n  }\n"])), (function(e) { return e.theme.colors.cardBorder }), (function(e) { return e.theme.mediaQueries.sm })),
                ve = function(e) { var t, n = e.vote,
                        c = e.isVoter,
                        r = Object(O.b)().t,
                        a = !!(null === (t = n.metadata) || void 0 === t ? void 0 : t.votingPower),
                        o = a ? parseFloat(n.metadata.votingPower).toLocaleString(void 0, { minimumFractionDigits: 0, maximumFractionDigits: 3 }) : "--"; return Object(I.jsxs)(me, { children: [Object(I.jsx)(pe, { children: Object(I.jsxs)(i.O, { alignItems: "center", children: [Object(I.jsx)(i.Z, { href: Object(N.e)(n.voter, "address"), children: Object(B.a)(n.voter) }), c && Object(I.jsxs)(i.Lb, { variant: "success", outline: !0, ml: "8px", children: [Object(I.jsx)(i.z, { mr: "4px" }), " ", r("Voted")] })] }) }), Object(I.jsx)(fe, { children: Object(I.jsx)(V, { title: n.proposal.choices[n.choice - 1], children: n.proposal.choices[n.choice - 1] }) }), Object(I.jsx)(he, { children: Object(I.jsxs)(i.O, { alignItems: "center", justifyContent: "end", children: [Object(I.jsx)(i.Nb, { title: n.metadata.votingPower, children: o }), a && Object(I.jsx)(i.Z, { href: "".concat(C.b, "/").concat(n.id) })] }) })] }) },
                ge = function(e) { var t; return parseFloat(null === e || void 0 === e || null === (t = e.metadata) || void 0 === t ? void 0 : t.votingPower) },
                ke = function(e) { var t = e.votes,
                        n = Object(o.useState)(!1),
                        c = Object(H.a)(n, 2),
                        r = c[0],
                        a = c[1],
                        b = Object(O.b)().t,
                        l = Object(s.c)().account,
                        u = je()(t, [ge, "created"], ["desc", "desc"]),
                        x = r ? u : u.slice(0, 20),
                        p = Object(d.e)() === j.h.IDLE; return Object(I.jsxs)(i.s, { children: [Object(I.jsx)(i.v, { children: Object(I.jsxs)(i.O, { alignItems: "center", justifyContent: "space-between", children: [Object(I.jsx)(i.Q, { as: "h3", scale: "md", children: b("Votes (%count%)", { count: t.length.toLocaleString() }) }), !p && Object(I.jsx)(i.i, { spin: !0, width: "22px" })] }) }), !p && Object(I.jsx)(Oe, {}), p && x.length > 0 && Object(I.jsxs)(I.Fragment, { children: [x.map((function(e) { var t = l && e.voter.toLowerCase() === l.toLowerCase(); return Object(I.jsx)(ve, { vote: e, isVoter: t }, e.id) })), Object(I.jsx)(i.O, { alignItems: "center", justifyContent: "center", py: "8px", px: "24px", children: Object(I.jsx)(i.p, { width: "100%", onClick: function() { a(!r) }, variant: "text", endIcon: r ? Object(I.jsx)(i.E, { color: "darkgreen", width: "21px" }) : Object(I.jsx)(i.B, { color: "darkgreen", width: "21px" }), disabled: !p, children: b(r ? "Hide" : "See All") }) })] }), p && 0 === x.length && Object(I.jsx)(i.O, { alignItems: "center", justifyContent: "center", py: "32px", children: Object(I.jsx)(i.Q, { as: "h5", children: b("No votes found") }) })] }) },
                we = n(226);
            t.default = function() { var e = Object(b.i)().id,
                    t = Object(d.a)(e),
                    n = Object(O.b)().t,
                    c = Object(s.c)().account,
                    r = Object(u.b)(),
                    a = Object(d.d)(e),
                    k = Object(d.e)(),
                    w = Object(d.b)(),
                    y = c && a.some((function(e) { return e.voter.toLowerCase() === c.toLowerCase() })),
                    N = null !== t && void 0 !== t ? t : {},
                    B = N.id,
                    C = void 0 === B ? null : B,
                    S = N.snapshot,
                    A = void 0 === S ? null : S,
                    D = k === j.h.LOADING || w === j.h.LOADING; return Object(o.useEffect)((function() { r(Object(x.b)(e)) }), [e, r]), Object(o.useEffect)((function() { C && A && r(Object(x.d)({ proposalId: C, block: Number(A) })) }), [C, A, r]), t ? Object(I.jsxs)(p.a, { py: "40px", children: [Object(I.jsx)(we.a, {}), Object(I.jsx)(i.m, { mb: "40px", children: Object(I.jsx)(i.p, { as: l.a, to: "/voting", variant: "text", startIcon: Object(I.jsx)(i.c, { color: "darkgreen", width: "24px" }), px: "0", children: n("Back to Vote Overview") }) }), Object(I.jsxs)(g.a, { children: [Object(I.jsxs)(i.m, { children: [Object(I.jsxs)(i.m, { mb: "32px", children: [Object(I.jsxs)(i.O, { alignItems: "center", mb: "8px", children: [Object(I.jsx)(v.a, { proposalState: t.state }), Object(I.jsx)(v.b, { isCoreProposal: Object(m.h)(t), ml: "8px" })] }), Object(I.jsx)(i.Q, { as: "h1", scale: "xl", mb: "16px", children: t.title }), Object(I.jsx)(i.m, { children: Object(I.jsx)(f.a, { children: t.body }) })] }), !D && !y && t.state === j.e.ACTIVE && Object(I.jsx)(le, { proposal: t, mb: "16px" }), Object(I.jsx)(ke, { votes: a })] }), Object(I.jsxs)(i.m, { children: [Object(I.jsx)(L, { proposal: t }), Object(I.jsx)(E, { choices: t.choices, votes: a })] })] })] }) : Object(I.jsx)(h.a, {}) } }, 753: function(e, t, n) { "use strict";
            n.d(t, "h", (function() { return x })), n.d(t, "c", (function() { return O })), n.d(t, "b", (function() { return p })), n.d(t, "d", (function() { return f })), n.d(t, "e", (function() { return h })), n.d(t, "i", (function() { return m })), n.d(t, "g", (function() { return v })), n.d(t, "a", (function() { return g })), n.d(t, "f", (function() { return k })); var c = n(17),
                r = n(33),
                a = n(6),
                o = n(3),
                i = n.n(o),
                s = n(12),
                b = n(87),
                l = n(34),
                u = n(46),
                j = n(103),
                d = n(754),
                x = function(e) { return e.author.toLowerCase() === d.a.toLowerCase() },
                O = function(e, t) { switch (t) {
                        case u.f.COMMUNITY:
                            return e.filter((function(e) { return !x(e) }));
                        case u.f.CORE:
                            return e.filter((function(e) { return x(e) }));
                        case u.f.ALL:
                        default:
                            return e } },
                p = function(e, t) { return e.filter((function(e) { return e.state === t })) },
                f = function() { return { plugins: {}, network: 56, strategies: [{ name: "cake", params: { symbol: "CAKE", address: l.a.cake.address, decimals: 18 } }] } },
                h = function() { return { version: d.e, timestamp: (Date.now() / 1e3).toFixed(), space: d.c } },
                m = function() { var e = Object(s.a)(i.a.mark((function e(t) { var n, c, r; return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch(b.f, { method: "post", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(t) });
                                case 2:
                                    if ((n = e.sent).ok) { e.next = 8; break } return e.next = 6, n.json();
                                case 6:
                                    throw c = e.sent, new Error(null === c || void 0 === c ? void 0 : c.error_description);
                                case 8:
                                    return e.next = 10, n.json();
                                case 10:
                                    return r = e.sent, e.abrupt("return", r);
                                case 12:
                                case "end":
                                    return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(),
                v = function() { var e = Object(s.a)(i.a.mark((function e(t, n, c) { var r, a, o; return i.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.t0 = c, e.t0) { e.next = 5; break } return e.next = 4, j.a.getBlockNumber();
                                case 4:
                                    e.t0 = e.sent;
                                case 5:
                                    return r = e.t0, e.next = 8, fetch("".concat(b.g, "/power"), { method: "post", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ address: t, block: r, poolAddresses: n }) });
                                case 8:
                                    return a = e.sent, e.next = 11, a.json();
                                case 11:
                                    return o = e.sent, e.abrupt("return", o.data);
                                case 13:
                                case "end":
                                    return e.stop() } }), e) }))); return function(t, n, c) { return e.apply(this, arguments) } }(),
                g = function(e) { return e.reduce((function(e, t) { var n = t.proposal.choices[t.choice - 1]; return Object(a.a)(Object(a.a)({}, e), {}, Object(c.a)({}, n, e[n] ? [].concat(Object(r.a)(e[n]), [t]) : [t])) }), {}) },
                k = function(e) { return e.reduce((function(e, t) { var n; return e + parseFloat(null === (n = t.metadata) || void 0 === n ? void 0 : n.votingPower) }), 0) } }, 754: function(e, t, n) { "use strict";
            n.d(t, "d", (function() { return c })), n.d(t, "a", (function() { return r })), n.d(t, "b", (function() { return a })), n.d(t, "e", (function() { return o })), n.d(t, "c", (function() { return i })), n.d(t, "f", (function() { return s })); var c = 10,
                r = "0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",
                a = "https://gateway.ipfs.io/ipfs",
                o = "0.1.3",
                i = "cake.eth",
                s = 10 }, 779: function(e, t, n) { "use strict";
            n.d(t, "c", (function() { return r })), n.d(t, "a", (function() { return a })), n.d(t, "d", (function() { return o })), n.d(t, "e", (function() { return i })), n.d(t, "b", (function() { return s })); var c = n(28),
                r = function() { var e = Object(c.c)((function(e) { return e.voting.proposals })); return Object.values(e) },
                a = function(e) { return Object(c.c)((function(t) { return t.voting.proposals[e] })) },
                o = function(e) { var t = Object(c.c)((function(t) { return t.voting.votes[e] })); return t ? t.filter((function(e) { return !0 !== e._inValid })) : [] },
                i = function() { return Object(c.c)((function(e) { return e.voting.voteLoadingStatus })) },
                s = function() { return Object(c.c)((function(e) { return e.voting.proposalLoadingStatus })) } }, 792: function(e, t, n) { "use strict";
            n.d(t, "b", (function() { return p })), n.d(t, "a", (function() { return k })); var c = n(6),
                r = n(3),
                a = n.n(r),
                o = n(33),
                i = n(12),
                s = (n(64), n(29)),
                b = n.n(s),
                l = n(41),
                u = n(4),
                j = n(102),
                d = n(61),
                x = function() { var e = j.a.getState().user.gasPrice || d.b.default; return "56" === u.a.MAINNET.toString() ? e : d.b.testnet },
                O = { gasLimit: l.i },
                p = function() { var e = Object(i.a)(a.a.mark((function e(t, n) { var r, o, i, s, b; return a.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = x(), 0 !== n) { e.next = 9; break } return e.next = 4, t.leaveStaking("0", Object(c.a)(Object(c.a)({}, O), {}, { gasPrice: r }));
                                case 4:
                                    return o = e.sent, e.next = 7, o.wait();
                                case 7:
                                    return i = e.sent, e.abrupt("return", i.status);
                                case 9:
                                    return e.next = 11, t.deposit(n, "0", Object(c.a)(Object(c.a)({}, O), {}, { gasPrice: r }));
                                case 11:
                                    return s = e.sent, e.next = 14, s.wait();
                                case 14:
                                    return b = e.sent, e.abrupt("return", b.status);
                                case 16:
                                case "end":
                                    return e.stop() } }), e) }))); return function(t, n) { return e.apply(this, arguments) } }(),
                f = n(89),
                h = n(346),
                m = n(53),
                v = n(103),
                g = n(35),
                k = function() { var e = Object(i.a)(a.a.mark((function e(t) { var n, c, r, i, s, l; return a.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = f.a.filter((function(e) { return 0 !== e.sousId })).filter((function(e) { return !1 === e.isFinished || void 0 === e.isFinished })), e.t0 = t, e.t0) { e.next = 6; break } return e.next = 5, v.a.getBlockNumber();
                                case 5:
                                    e.t0 = e.sent;
                                case 6:
                                    return c = e.t0, r = n.map((function(e) { var t = e.contractAddress; return { address: Object(g.a)(t), name: "startBlock" } })), i = n.map((function(e) { var t = e.contractAddress; return { address: Object(g.a)(t), name: "bonusEndBlock" } })), e.next = 11, Object(m.a)(h, r);
                                case 11:
                                    return s = e.sent, e.next = 14, Object(m.a)(h, i);
                                case 14:
                                    return l = e.sent, e.abrupt("return", n.reduce((function(e, t, n) { var r = s[n] ? new b.a(s[n]) : null,
                                            a = l[n] ? new b.a(l[n]) : null; return r && a ? r.gte(c) || a.lte(c) ? e : [].concat(Object(o.a)(e), [t]) : e }), []));
                                case 16:
                                case "end":
                                    return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }() }, 802: function(e, t, n) { "use strict";
            n.d(t, "b", (function() { return b })), n.d(t, "a", (function() { return l })); var c, r = n(6),
                a = n(13),
                o = (n(0), n(2)),
                i = n(7),
                s = n(1),
                b = i.e.div(c || (c = Object(a.a)(["\n  align-items: center;\n  border: 1px solid ", ";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                l = function(e) { return Object(s.jsx)(o.m, Object(r.a)({ mb: "24px", maxWidth: "320px" }, e)) } }, 809: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return p })), n.d(t, "b", (function() { return f })); var c = n(6),
                r = n(59),
                a = (n(0), n(2)),
                o = n(21),
                i = n(1),
                s = function(e) { var t = Object(o.b)().t; return Object(i.jsx)(a.Lb, Object(c.a)(Object(c.a)({ variant: "", outline: !0, startIcon: Object(i.jsx)(a.Ub, { width: "18px", color: "", mr: "4px" }) }, e), {}, { children: t("Core") })) },
                b = function(e) { var t = Object(o.b)().t; return Object(i.jsx)(a.Lb, Object(c.a)(Object(c.a)({ variant: "failure", outline: !0, startIcon: Object(i.jsx)(a.H, { width: "18px", color: "failure", mr: "4px" }) }, e), {}, { children: t("Community") })) },
                l = function(e) { var t = Object(o.b)().t; return Object(i.jsx)(a.Lb, Object(c.a)(Object(c.a)({ variant: "success", startIcon: Object(i.jsx)(a.Xb, { width: "18px", color: "success", mr: "4px" }) }, e), {}, { children: t("Vote Now") })) },
                u = function(e) { var t = Object(o.b)().t; return Object(i.jsx)(a.Lb, Object(c.a)(Object(c.a)({ variant: "binance", startIcon: Object(i.jsx)(a.Pb, { width: "18px", color: "success", mr: "4px" }) }, e), {}, { children: t("Soon") })) },
                j = function(e) { var t = Object(o.b)().t; return Object(i.jsx)(a.Lb, Object(c.a)(Object(c.a)({ variant: "textDisabled", startIcon: Object(i.jsx)(a.l, { width: "18px", color: "textDisabled", mr: "4px" }) }, e), {}, { children: t("Closed") })) },
                d = n(46),
                x = ["proposalState"],
                O = ["isCoreProposal"],
                p = function(e) { var t = e.proposalState,
                        n = Object(r.a)(e, x); return t === d.e.ACTIVE ? Object(i.jsx)(l, Object(c.a)({}, n)) : t === d.e.PENDING ? Object(i.jsx)(u, Object(c.a)({}, n)) : Object(i.jsx)(j, Object(c.a)({}, n)) },
                f = function(e) { var t = e.isCoreProposal,
                        n = Object(r.a)(e, O); return t ? Object(i.jsx)(s, Object(c.a)({}, n)) : Object(i.jsx)(b, Object(c.a)({}, n)) } }, 812: function(e, t, n) { var c = n(813),
                r = n(107);
            e.exports = function(e, t, n, a) { return null == e ? [] : (r(t) || (t = null == t ? [] : [t]), r(n = a ? void 0 : n) || (n = null == n ? [] : [n]), c(e, t, n)) } }, 813: function(e, t, n) { var c = n(288),
                r = n(348),
                a = n(347),
                o = n(457),
                i = n(814),
                s = n(455),
                b = n(815),
                l = n(286),
                u = n(107);
            e.exports = function(e, t, n) { t = t.length ? c(t, (function(e) { return u(e) ? function(t) { return r(t, 1 === e.length ? e[0] : e) } : e })) : [l]; var j = -1;
                t = c(t, s(a)); var d = o(e, (function(e, n, r) { return { criteria: c(t, (function(t) { return t(e) })), index: ++j, value: e } })); return i(d, (function(e, t) { return b(e, t, n) })) } }, 814: function(e, t) { e.exports = function(e, t) { var n = e.length; for (e.sort(t); n--;) e[n] = e[n].value; return e } }, 815: function(e, t, n) { var c = n(816);
            e.exports = function(e, t, n) { for (var r = -1, a = e.criteria, o = t.criteria, i = a.length, s = n.length; ++r < i;) { var b = c(a[r], o[r]); if (b) return r >= s ? b : b * ("desc" == n[r] ? -1 : 1) } return e.index - t.index } }, 816: function(e, t, n) { var c = n(197);
            e.exports = function(e, t) { if (e !== t) { var n = void 0 !== e,
                        r = null === e,
                        a = e === e,
                        o = c(e),
                        i = void 0 !== t,
                        s = null === t,
                        b = t === t,
                        l = c(t); if (!s && !l && !o && e > t || o && i && b && !s && !l || r && i && b || !n && b || !a) return 1; if (!r && !o && !l && e < t || l && n && a && !r && !o || s && n && a || !i && a || !b) return -1 } return 0 } }, 826: function(e, t, n) { "use strict"; var c, r = n(13),
                a = n(7).e.div(c || (c = Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  ", " {\n    grid-template-columns: 1fr 332px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg }));
            t.a = a }, 827: function(e, t, n) { "use strict";
            n(0); var c = n(2),
                r = n(21),
                a = n(86),
                o = n(802),
                i = n(1);
            t.a = function(e) { var t = e.total,
                    n = e.cakeBalance,
                    s = e.cakeVaultBalance,
                    b = e.cakePoolBalance,
                    l = e.poolsBalance,
                    u = e.cakeBnbLpBalance,
                    j = Object(r.b)().t; return Object(i.jsxs)(o.a, { mb: "0", children: [Object(i.jsx)(c.Nb, { as: "p", mb: "24px", fontSize: "14px", color: "black", children: j("Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.") }), Object(i.jsx)(c.Nb, { color: "dark", textTransform: "uppercase", mb: "4px", bold: !0, fontSize: "14px", children: j("Overview") }), Object(i.jsxs)(o.b, { children: [Object(i.jsx)(c.Nb, { color: "dark", children: j("Your Voting Power") }), Object(i.jsx)(c.Nb, { bold: !0, fontSize: "20px", children: Object(a.c)(t, 0, 3) })] }), Object(i.jsx)(c.Nb, { color: "dark", textTransform: "uppercase", mb: "4px", bold: !0, fontSize: "14px", children: j("Your Cake Held Now") }), Object(i.jsxs)(c.O, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(i.jsx)(c.Nb, { color: "black", fontSize: "16px", children: j("Wallet") }), Object(i.jsx)(c.Nb, { textAlign: "right", children: Object(a.c)(n, 0, 3) })] }), Object(i.jsxs)(c.O, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(i.jsx)(c.Nb, { color: "black", fontSize: "16px", children: j("Manual CAKE Pool") }), Object(i.jsx)(c.Nb, { textAlign: "right", children: Object(a.c)(b, 0, 3) })] }), Object(i.jsxs)(c.O, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(i.jsx)(c.Nb, { color: "black", fontSize: "16px", children: j("Auto CAKE Pool") }), Object(i.jsx)(c.Nb, { textAlign: "right", children: Object(a.c)(s, 0, 3) })] }), Object(i.jsxs)(c.O, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(i.jsx)(c.Nb, { color: "black", fontSize: "16px", children: j("Other Syrup Pools") }), Object(i.jsx)(c.Nb, { textAlign: "right", children: Object(a.c)(l, 0, 3) })] }), Object(i.jsxs)(c.O, { alignItems: "center", justifyContent: "space-between", mb: "4px", children: [Object(i.jsx)(c.Nb, { color: "black", fontSize: "16px", children: j("CAKE BNB LP") }), Object(i.jsx)(c.Nb, { textAlign: "right", children: Object(a.c)(u, 0, 3) })] })] }) } }, 828: function(e, t, n) { "use strict"; var c = n(3),
                r = n.n(c),
                a = n(6),
                o = n(12),
                i = n(11),
                s = n(0),
                b = n(83),
                l = n(792),
                u = n(35),
                j = n(103),
                d = n(753),
                x = { verificationHash: null, cakeBalance: 0, cakeVaultBalance: 0, cakePoolBalance: 0, poolsBalance: 0, cakeBnbLpBalance: 0, total: 0 };
            t.a = function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = Object(b.c)(),
                    c = n.account,
                    O = Object(s.useState)(x),
                    p = Object(i.a)(O, 2),
                    f = p[0],
                    h = p[1],
                    m = Object(s.useState)(!!c),
                    v = Object(i.a)(m, 2),
                    g = v[0],
                    k = v[1]; return Object(s.useEffect)((function() { c && t && function() { var n = Object(o.a)(r.a.mark((function n() { var o, i, s, b, x, O, p, f, m, v, g; return r.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (k(!0), n.prev = 1, n.t0 = e, n.t0) { n.next = 7; break } return n.next = 6, j.a.getBlockNumber();
                                    case 6:
                                        n.t0 = n.sent;
                                    case 7:
                                        return o = n.t0, n.next = 10, Object(l.a)(o);
                                    case 10:
                                        return i = n.sent, s = i.map((function(e) { var t = e.contractAddress; return Object(u.a)(t) })), n.next = 14, Object(d.g)(c, s, o);
                                    case 14:
                                        b = n.sent, x = b.cakeBalance, O = b.cakeBnbLpBalance, p = b.cakePoolBalance, f = b.total, m = b.poolsBalance, v = b.cakeVaultBalance, g = b.verificationHash, t && h((function(e) { return Object(a.a)(Object(a.a)({}, e), {}, { verificationHash: g, cakeBalance: parseFloat(x), cakeBnbLpBalance: parseFloat(O), cakePoolBalance: parseFloat(p), poolsBalance: parseFloat(m), cakeVaultBalance: parseFloat(v), total: parseFloat(f) }) }));
                                    case 23:
                                        return n.prev = 23, k(!1), n.finish(23);
                                    case 26:
                                    case "end":
                                        return n.stop() } }), n, null, [
                                [1, , 23, 26]
                            ]) }))); return function() { return n.apply(this, arguments) } }()() }), [c, e, h, t, k]), Object(a.a)(Object(a.a)({}, f), {}, { isLoading: g }) } }, 862: function(e, t, n) { "use strict"; var c, r, a, o = n(6),
                i = (n(0), n(865)),
                s = n.n(i),
                b = n(901),
                l = n.n(b),
                u = n(13),
                j = n(2),
                d = n(7),
                x = n(1),
                O = d.e.table(c || (c = Object(u.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ", ";\n    padding: 8px;\n  }\n"])), (function(e) { return e.theme.colors.black })),
                p = d.e.div(r || (r = Object(u.a)(["\n  color: ", ";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])), (function(e) { return e.theme.colors.black })),
                f = function(e) { return Object(x.jsx)(j.Q, Object(o.a)({ as: "h4", scale: "lg", my: "16px" }, e)) },
                h = { h1: f, h2: f, h3: f, h4: f, h5: f, h6: f, p: function(e) { return Object(x.jsx)(j.Nb, Object(o.a)({ as: "p", my: "16px" }, e)) }, table: O, ol: function(e) { return Object(x.jsx)(p, Object(o.a)({ as: "ol" }, e)) }, ul: function(e) { return Object(x.jsx)(p, Object(o.a)({ as: "ul" }, e)) }, pre: d.e.pre(a || (a = Object(u.a)(["\n  color: ", ";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])), (function(e) { return e.theme.colors.black })) };
            t.a = function(e) { return Object(x.jsx)(s.a, Object(o.a)({ remarkPlugins: [l.a], components: h }, e)) } } }
]);
//# sourceMappingURL=6.45a84f3c.chunk.js.map