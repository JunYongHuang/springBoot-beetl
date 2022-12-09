package com.demo.conf;

import org.beetl.core.ResourceLoader;
import org.beetl.core.resource.ClasspathResourceLoader;
import org.beetl.ext.spring.BeetlGroupUtilConfiguration;
import org.beetl.ext.spring.BeetlSpringViewResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * beetl配置文件
 */
@Configuration
@EnableConfigurationProperties(BeetlProperties.class)
public class BeetlAutoConfiguration extends WebMvcConfigurerAdapter {

	@Autowired
	private BeetlProperties properties;

	@Bean
	public ResourceLoader getResourceLoader() {
		ResourceLoader loader = new ClasspathResourceLoader(this.getClass().getClassLoader(), properties.getRoot(),
				properties.getChartset());
		return loader;
	}

	@Bean
	public BeetlGroupUtilConfiguration beetlConfig() {
		BeetlGroupUtilConfiguration config = new BeetlGroupUtilConfiguration();
		config.setResourceLoader(getResourceLoader());
		config.init();
		return config;
	}

	@Bean
	public BeetlSpringViewResolver getBeetlViewResolver() {
		BeetlSpringViewResolver resolver = new BeetlSpringViewResolver();
		resolver.setContentType(properties.getContentType());
		resolver.setPrefix(properties.getPrefix());
		resolver.setSuffix(properties.getSuffix());
		return resolver;
	}

	@Override
	public void configureViewResolvers(ViewResolverRegistry registry) {
		registry.viewResolver(getBeetlViewResolver());
	}

}
