(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_home_bfd6e9._.js", {

"[project]/src/app/home/G2.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "G2Chart": (()=>G2Chart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$antv$2f$g2$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@antv/g2/esm/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
// 渲染条形图
function renderChart(container, color, formColor, toColor) {
    const chart = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$antv$2f$g2$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"]({
        container,
        autoFit: true
    });
    // 准备数据
    const data = [
        {
            price: 1001,
            date: '2024-01-01'
        },
        {
            price: 2020,
            date: '2024-01-02'
        },
        {
            price: 3030,
            date: '2024-01-03'
        },
        {
            price: 2200,
            date: '2024-01-04'
        },
        {
            price: 1922,
            date: '2024-01-05'
        },
        {
            price: 6060,
            date: '2024-01-06'
        },
        {
            price: 3023,
            date: '2024-01-07'
        },
        {
            price: 5440,
            date: '2024-01-08'
        },
        {
            price: 6660,
            date: '2024-01-09'
        },
        {
            price: 3900,
            date: '2024-01-10'
        }
    ];
    // 声明可视化
    chart.data(data) // 绑定数据
    .area().encode('x', 'date').encode('y', 'price').encode('key', 'x').encode('shape', 'smooth') // 指定形状
    .style('fill', `linear-gradient(-90deg, white 0%, ${toColor} 100%)`).style('stroke', color).style('strokeWidth', 1).animate('enter', {
        type: 'pathIn',
        duration: 1000
    }); // 指定更新动画的时间
    // 渲染可视化
    chart.render();
    chart.render();
    return chart;
}
function G2Chart({ className, color, formColor, toColor }) {
    _s();
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "G2Chart.useEffect": ()=>{
            if (!chart.current && container.current) {
                console.log('renderChart', color, formColor, toColor);
                chart.current = renderChart(container.current, color, formColor, toColor);
            }
        }
    }["G2Chart.useEffect"], [
        color,
        formColor,
        toColor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: container,
        className: className
    }, void 0, false, {
        fileName: "[project]/src/app/home/G2.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(G2Chart, "Ntra7YMG9WniddZkCSFVwDeyZdE=");
_c = G2Chart;
var _c;
__turbopack_refresh__.register(_c, "G2Chart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/home/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_home_bfd6e9._.js.map