//
//  NativePieChartManager.m
//  NativeChart
//
//  Created by Yiheng Quan on 3/3/20.
//

#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(NativePieChartManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(chartData, NSArray)
RCT_EXPORT_VIEW_PROPERTY(dataLabels, NSArray)
RCT_EXPORT_VIEW_PROPERTY(darkMode, BOOL)
RCT_EXPORT_VIEW_PROPERTY(themeColor, NSString)

@end
