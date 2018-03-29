<template>
	<div id="profile">
		<div id="user-profile">
			<!-- 用户头像 -->
			<avatar
				id="avatar"
				:src="profile.avatar_url"></avatar>
			<!-- 用户名称 -->
			<div id="user-info">
				<div id="user-info-upper">
					<h1>
						<text-holder
							width="190px"
							height="19px"
						>
							{{profile.name || profile.login}}
						</text-holder>
					</h1>
					<h2>
						<text-holder
							width="100px"
							height="16px"
						>
							{{profile.login || profile.name}}
						</text-holder>
					</h2>
				</div>
				<!-- 跟随按钮 -->
				<div id="user-info-lower">
					<div class="round-btn">
						Follow
					</div>
				</div>
			</div>
		</div>
		<!--用户签名信息-->
		<div id="user-bio">
			<text-holder
				width="20px"
				height="20px"
				:center="true"
			>
				{{profile.bio}}
			</text-holder>
		</div>
		<!--用户跟随者、公开仓库数量、跟踪中-->
		<div id="user-stats">
			<div class="stats-divider space-holder"></div>
			<div class="stats-block">
				<div class="stats-title">
					<text-holder
						width="40px"
						height="20px"
						:center="true"
					>
						{{profile.followers}}
					</text-holder>
					<div class="stats-description">Followers</div>
				</div>
			</div>
			
			<div class="stats-divider"></div>
			<div class="stats-block">
				<div class="stats-title">
					<text-holder
						width="40px"
						height="20px"
						:center="true"
					>
						{{profile.public_repos}}
					</text-holder>
					<div class="stats-description">Public repos</div>
				</div>
			</div>
			
			<div class="stats-divider"></div>
			<div class="stats-block">
				<div class="stats-title">
					<text-holder
						width="40px"
						height="20px"
						:center="true"
					>
						{{profile.following}}
					</text-holder>
					<div class="stats-description">Following</div>
				</div>
			</div>
			
			<div class="stats-divider space-holder"></div>
		
		</div>
		<!--用户所有仓库列表-->
		<div id="view-repos">
			<router-link class="green-btn"
			             :to="{name: 'USER_REPO_LIST'}"
			>VIEW REPOSITORIES
			</router-link>
		</div>
	</div>
</template>

<script>
  import Avatar from './Avatar'
  import TextHolder from './TextHolder'
  
  export default {
    props     : ['username', 'profile'],
    components: {
      Avatar,
      TextHolder,
    },
  }
</script>

<style lang="less">
	#profile {
		background-image: linear-gradient(to bottom, #224365, #0a1b30);
		padding-top: 20px;
		/*用户头像名称跟随*/
		#user-profile {
			@profileImageSize: 100px;
			display: flex;
			padding: 10px 15px;
			
			#avatar {
				background-position: center center;
				background-size: cover;
				height: @profileImageSize;
				width: @profileImageSize;
				border-radius: 6px;
			}
			
			#user-info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 15px;
				#user-info-upper {
					h1 {
						font-family: GothamPro-Medium;
						font-size: 18px;
						color: #ffffff;
						margin: 2px 0 12px;
						min-height: 19px;
					}
					h2 {
						font-family: GothamPro;
						font-size: 14px;
						color: #ffffff;
						margin: 0;
						min-height: 15px;
					}
				}
			}
		}
		/*用户签名信息*/
		#user-bio {
			opacity: 0.4;
			font-family: GothamPro;
			font-size: 16px;
			text-align: center;
			color: #ffffff;
			margin: 20px 0;
			padding: 0 10px;
			min-height: 22px;
			line-height: 20px;
		}
		/*用户仓库状态*/
		#user-stats {
			display: flex;
			justify-content: space-around;
			align-items: center;
			.stats-title {
				font-family: GothamPro-Bold;
				font-size: 22px;
				text-align: center;
				color: #ffffff;
				min-height: 31px;
			}
			
			.stats-description {
				font-family: GothamPro;
				font-size: 13px;
				letter-spacing: 0.6px;
				text-align: center;
				color: #aeb6c0;
			}
			
			.stats-divider {
				width: 2px;
				height: 20px;
				background-color: rgba(255, 255, 255, 0.2);
				
				&.space-holder {
					background-color: rgba(0, 0, 0, 0);
				}
			}
		}
		
		#view-repos {
			text-align: center;
			padding: 35px 0;
		}
	}
</style>
